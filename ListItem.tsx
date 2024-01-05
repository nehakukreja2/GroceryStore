// import flatListstyles from './styles';
// import {View, TouchableOpacity, Text, Image} from 'react-native';

// type Category = {
//   Electronics: string;
//   Jewelery: string;
//   MenClothing: string;
//   WomenClothing: string;
// };

// type Rating = {
//   rate: number;
//   count: number;
// };

// type GroceryItem = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: Category;
//   image: string;
//   rating: Rating;
//   count: number;
// };

// const ListItem = ({
//   item,
//   index,
//   grocery,
// }: {
//   item: GroceryItem;
//   index: number;
//   grocery: Array<GroceryItem>;
// }) => {
//   return (
//     <View
//       style={[
//         flatListstyles.listItemView,
//         index !== grocery?.length - 1 && {
//           borderBottomWidth: 1,
//           borderBottomColor: '#ccc',
//         },
//       ]}>
//       <View>
//         <View style={flatListstyles.addbuttonView}>
//           {item?.count === 0 ? (
//             <TouchableOpacity
//               style={flatListstyles.addButton}
//               onPress={() => {
//                 if (grocery?.includes(item)) {
//                   item.count++;
//                   setGrocery([...grocery]);
//                 }
//               }}>
//               <Text style={flatListstyles.addButtonText}> Add</Text>
//             </TouchableOpacity>
//           ) : (
//             <View style={flatListstyles.touchableOpacityView}>
//               <TouchableOpacity
//                 onPress={() => {
//                   item.count--;
//                   setGrocery([...grocery]);
//                 }}
//                 style={flatListstyles.addMinusButton}>
//                 <Text style={flatListstyles.addButtonText}>-</Text>
//               </TouchableOpacity>
//               <Text style={flatListstyles.counterText}>{item?.count}</Text>
//               <TouchableOpacity
//                 onPress={() => {
//                   item.count++;
//                   setGrocery([...grocery]);
//                 }}
//                 style={flatListstyles.addMinusButton}>
//                 <Text style={flatListstyles.addButtonText}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//           <Image style={flatListstyles.image} source={{uri: item.image}} />
//           <View>
//             <Text numberOfLines={1} style={flatListstyles.text}>
//               {item.title}
//             </Text>
//             <View style={flatListstyles.detailWrapper}>
//               <View>
//                 <Text style={flatListstyles.smallText}>UOM</Text>
//                 <Text style={flatListstyles.smallText}>02</Text>
//               </View>
//               <View>
//                 <Text style={flatListstyles.smallText}>PACK SIZE</Text>
//                 <Text style={flatListstyles.smallText}>02</Text>
//               </View>
//               <View>
//                 <Text style={flatListstyles.smallText}>PER UNIT</Text>
//                 <Text style={flatListstyles.smallText}>$ {item.price}</Text>
//               </View>
//               <View>
//                 <Text style={flatListstyles.smallText}>TOTAL</Text>
//                 <Text style={flatListstyles.smallText}>
//                   $ {(item.price * item.count)?.toFixed(2)}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ListItem;
