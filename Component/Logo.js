import React from 'react'
import { View, Text } from 'react-native'

const Logo = () => {

    const title = "TNI"
    const istitle = false;

    const showData = () => <Text>Hello December</Text>

    return (
        <View>
            <Text style = {{color : 'blue', fontSize : 20}}>Thai-Nichi</Text>
            {
                istitle === true && <Text>{title}</Text>
            }
            {
                istitle === true//กำหนดเงื่อนไข
                ?<Text>{title}</Text>//ถ้าเงื่อนไขเป็นจริง
                :<Text>Thai-Nichi</Text>//ถ้าเงื่อนไขเป็นเท็จ
            }
            { showData()}
            {/* <Text>{title}</Text> */}
        </View>
    )
}

export default Logo