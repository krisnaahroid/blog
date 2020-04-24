import { Container, View, Image} from '../../components/atoms'
import { NotFound } from '../../components/molecules'
import Backpress from '../../static/illustrations/backpress.svg'
import Link from 'next/link'

const Notfound = () => {

    return (
        <>
            <Container>
                <View position="absolute" top="3%" left="2%">
                        <a href="/">
                            <Image src={Backpress}/>
                        </a>
                </View>
                <View width="100%">
                    <NotFound title="NOTHING TO SEE HERE!"/>
                </View>
            </Container>
        </>
    )
}

export default Notfound;