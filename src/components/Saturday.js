import React from 'react';
import moment from 'moment';

const day = moment().day()

class Saturday extends React.Component {
    constructor(props) {
        super(props);
        if(day === 6) {
            this.state = {
                visibility: true
            }
        } else {
            this.state = {
                visibility: false
            } 
        } 
    }
    saturdayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div className="saturday">
                <button onClick={this.saturdayToggle}>Saturday</button>
            {this.state.visibility && 
         <div>
                <h3>Arms and Upper Body</h3>
                <p>7 min - Warm Up</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=-p0PA9Zt8zk"><img src="http://img.youtube.com/vi/-p0PA9Zt8zk/0.jpg"
                 width="200" height="150"/>
                 </a>
                 <p>20 min - Arms Cardio</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=Ai8KfyJ69Bc"><img src="http://img.youtube.com/vi/Ai8KfyJ69Bc/0.jpg"
                 width="200" height="150"/>
                </a> 
                <p>10 min - Toned Arms</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=j64BBgBGNIU"><img src="http://img.youtube.com/vi/j64BBgBGNIU/0.jpg"
                 width="200" height="150"/>
                </a> 
                <p>10 mins - Arms and Back</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=Mh_3ddy9zbY"><img src="http://img.youtube.com/vi/Mh_3ddy9zbY/0.jpg"
                 width="200" height="150"/>
                </a>
                <p>15 min - Cool Down</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=cO2RqgslEjk&t=630s"><img src="http://img.youtube.com/vi/cO2RqgslEjk/0.jpg"
                 width="200" height="150"/>
                </a>
                </div>
    }
            </div>
        )
    }
}

export default Saturday;