import React from 'react'
import daya from './asserts/daya.jpg'
import m1 from './asserts/m1.jpg'

const Details = () => {
    return (
        <div>

            <div class="how-section1">
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img src={daya} class="rounded-circle img-fluid" alt="" />
                    </div>
                    <div class="col-md-6">
                        <h4>Dayakar</h4>
                        <h4 class="subheading">Software Engineer,L&T,Bangalore</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Madhuri</h4>
                        <h4 class="subheading">Software Engineer,Bangalore</h4>

                    </div>
                    <div class="col-md-6 how-img">
                        <img src={m1} class="rounded-circle img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details