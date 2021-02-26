import React, {Component} from 'react'

class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <> 
            <footer class="bg-light text-center text-lg-start">
                <div class="container p-4">
                    <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <img src="https://storage-first-jimeneab.s3.us-east-2.amazonaws.com/Apple-Play-Store-Icon_30972.png" className=''></img>
                        <p>© 2021  Neudify LTD.</p>
                    </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href='https://neoeducate.com/' class="text-dark">Start</a>
                                </li>
                                <li>
                                    <a href='https://neoeducate.com/why-neo' class="text-dark">Why Neo</a>
                                </li>
                                <li>
                                    <a href='https://neoeducate.com/giving-back' class="text-dark">Giving Back</a>
                                </li>
                                <li>
                                    <a href='https://neoeducate.com/faqs' class="text-dark">FAQs</a>
                                </li>
                            </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <ul class="list-unstyled">
                        <li>
                            <a href='https://neoeducate.com/terms' class="text-dark">Terms And Conditions</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
            </>
        )
    }
}

export default Footer