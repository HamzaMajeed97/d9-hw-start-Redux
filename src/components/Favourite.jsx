import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Favourite = () => {

    const fc = useSelector((state) => state.favourite.content)

    const dispatch = useDispatch()



    return(
        <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
        <Link to = '/'>
<div>Go to Home </div>
        </Link>
    
        </Col>
        
      
      </Row>
    )
}


export  default Favourite