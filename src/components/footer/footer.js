import React, {Component} from 'react'
import { Container, Row} from 'reactstrap';
import './style.css'

class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Row className="footerContent">
                <div className='col-4 firstFooter'>
                    <img src="https://storage-first-jimeneab.s3.us-east-2.amazonaws.com/Apple-Play-Store-Icon_30972.png" className=''></img>
                    <p>© 2021  Neudify LTD.</p>
                </div>
                <div className='col-5 secondFooter'>
                    <ul>
                        <li><a href='https://neoeducate.com/'>Start</a></li>
                        <li><a href='https://neoeducate.com/why-neo'>Why Neo</a></li>
                        <li><a href='https://neoeducate.com/giving-back'>Giving Back</a></li>
                        <li><a href='https://neoeducate.com/faqs'>FAQs</a></li>
                    </ul>
                </div>
                <div className='col-3 thirdFooter'><a href='https://neoeducate.com/terms'>Terms and Conditions</a></div>
            </Row>
            </>
        )
    }
}

export default Footer