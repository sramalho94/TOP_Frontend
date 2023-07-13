import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


type Props = {}

const Onboard2 = (props: Props) => {


    // Probably should have all necessary properties as props, and pass them in a useState

{/* <DropDownPicker className='my-2 border-2 border-black rounded-lg'
                        // open={open}
                        // value={value}
                        // items={items}
                        // setOpen={setOpen}
                        // setValue={setValue}
                        // setItems={setItems}

                        />
                        <Text className="font-bold my-2">Race</Text>
                        <DropDownPicker className='my-2 border-2 border-black rounded-lg'
                        // open={open}
                        // value={value}
                        // items={items}
                        // setOpen={setOpen}
                        // setValue={setValue}
                        // setItems={setItems}

                        />
                        <Text className="font-bold my-2">Ethnicity</Text>
                        <DropDownPicker className='my-2 border-2 border-black rounded-lg'
                        // open={open}
                        // value={value}
                        // items={items}
                        // setOpen={setOpen}
                        // setValue={setValue}
                        // setItems={setItems}

                        /> */}

    

    return (
        <View>
            <DropDownPicker />

        </View>
    )

}

export default Onboard2;