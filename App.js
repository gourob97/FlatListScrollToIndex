import { useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DATA from './Data';


export default function App() {

  let flatList = useRef(null)
  return (
    <View style={styles.container} onLayout={()=>{
      console.log("layed")
      flatList.current.scrollToIndex({index:22})
    }}>
   <FlatList
       ref={flatList}
       data={DATA}
       onScrollToIndexFailed={()=>{
        setTimeout(()=>{
          flatList.current.scrollToIndex({index:22})
        }, 100)
        
       }}
       renderItem={({item})=>{
        let h = item.value*10
        return (
          <Text style={[styles.item, {height:h }]}>{item.value}</Text>
        )
       }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
item:{
  borderWidth:2,
  margin:4,
  borderColor:'red',
  padding:10,
  alignSelf:'center'
}
});
