import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


type Props = {
    text: string;
    selectItems: Object[];
}

const DropDownField = ({text, selectItems}: Props) => {


    // Probably should have all necessary properties as props, and pass them in a useState

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(selectItems);

    return (
        <View>

            <Text className="font-bold my-2 capitalize">{text}</Text>
            <DropDownPicker className='my-2 border-2 border-black rounded-lg'
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownDirection='TOP'
            listMode="SCROLLVIEW"
            />



        </View>
    )

}

export default DropDownField;