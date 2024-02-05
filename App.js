import { StyleSheet,FlatList,SafeAreaView,} from 'react-native';
import {DATA} from './Data';
import { useEffect, useState } from 'react';
import Row from './components/Row'
import Search from './components/search';


export default function App() {

  const [items,setItems] = useState([]);

  useEffect (() =>{
    setItems(DATA);
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem = {({item}) => (
          <Row person={item} />
        )}

      ></FlatList>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10',
    alignItems: 'center',
  },
  
});
