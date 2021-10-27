import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import WButton from '../components/WButton';

import WView from '../components/WView';
import type { ThemesApp } from '../themes/Colors';
import { useTheme } from '../themes/ThemeContext';
import { showAlertMessage } from '../utils/alert';
import axios from '../api/axios';
import WText from '../components/WText';
import WTouchable from '../components/WTouchable';
import WIcon from '../components/WIcon';

async function fetchAllCv(page = 1) {
  const body = {
    sort: { full_name: -1 },
    filter: {},
    pagination: { pageSize: 10, page },
  };
  return await axios.post('api/cv-apply/get', body);
}

const Home = () => {
  const queryClient = useQueryClient();
  const Colors: ThemesApp = useTheme().Colors;
  const [page, setPage] = useState<number>(1);
  const [refreshing, setOnRefresh] = useState<boolean>(false);
  const [dataCV, setDataCV] = useState<any>({});

  const { isFetching, isLoading } = useQuery(
    ['CVApplyGetAll', page],
    () => fetchAllCv(page),
    {
      onSuccess: res => {
        if (page === 1) {
          setDataCV(res);
        } else {
          setDataCV({
            ...dataCV,
            results: [...dataCV?.results, ...res?.results],
          });
        }
      },
    },
  );

  const mutationSignOut = useMutation(
    async () => await axios.post('api/auth/signOut'),
    {
      onError: () => {
        showAlertMessage('An unexpected error occurred.', 'Oops!');
      },
      onSuccess: async () => {
        await AsyncStorage.clear();
        queryClient.refetchQueries(['Auth']);
      },
    },
  );

  const signOut = () => mutationSignOut.mutate();

  const loadMore = () => {
    if (!isFetching) {
      setPage(state => {
        if (state === dataCV?.total_page) {
          return state;
        } else {
          queryClient.prefetchQuery(['CVApplyGetAll', state + 1], () =>
            fetchAllCv(state + 1),
          );
          return state + 1;
        }
      });
    }
  };

  const onDebounceRefresh = () => {
    queryClient.fetchQuery('CVApplyGetAll', () => {
      setPage(1);
      fetchAllCv(1);
    });
  };

  const renderItem = ({ item }: any) => {
    return (
      <WTouchable hit={10} mVer={16} mHoz={24}>
        <WView row alignCenter>
          <WIcon
            name="person-outline"
            type="MaterialIcons"
            size={18}
            color={Colors.primary}
          />
          <WText type="medium16" mLeft={8} color={Colors.text}>
            {item?.full_name}
          </WText>
        </WView>
        <WView row alignCenter mTop={6}>
          <WIcon
            name="mail-outline"
            type="MaterialIcons"
            size={18}
            color={Colors.primary}
          />
          <WText mLeft={8} type="regular14" color={Colors.text}>
            {`Position: ${item?.position_apply}`}
          </WText>
        </WView>
      </WTouchable>
    );
  };

  return (
    <WView fill pHoz={16}>
      <FlatList
        data={dataCV?.results}
        renderItem={renderItem}
        onEndReachedThreshold={1}
        maxToRenderPerBatch={5}
        keyExtractor={(__, index: number) => `${index}-index`}
        onEndReached={loadMore}
        ItemSeparatorComponent={() => (
          <WView style={StyleSheet.hairlineWidth} color={Colors.text} />
        )}
        ListFooterComponent={() =>
          isLoading ? (
            <WView mTop={20}>
              <ActivityIndicator size="large" color={Colors.primary} />
            </WView>
          ) : null
        }
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onDebounceRefresh}
            tintColor={Colors.primary}
            titleColor={Colors.primary}
          />
        }
      />
      <WButton
        title={'SignOut'}
        onPress={signOut}
        disabled={mutationSignOut.isLoading}
        loading={mutationSignOut.isLoading}
        mVer={24}
      />
    </WView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
