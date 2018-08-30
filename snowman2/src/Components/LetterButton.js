import React, { Component } from 'react';
// import step_0 from './images/step_0.png';
// import step_1 from './images/step_1.png';
// import step_2 from './images/step_2.png';
// import step_3 from './images/step_3.png';
// import step_4 from './images/step_4.png';
// import step_5 from './images/step_5.png';
// import step_6 from './images/step_6.png';
// import step_7 from './images/step_7.png'


class LetterButton extends Component {
    // imgGroup = [Step1, Step2, Step3, Step4, Step5, Step6, Step7]
    render() {
        if (this.props.picked.includes(this.props.letter)) {
            return (
                <button className="button" disabled>
                    *
                </button>
            )
        } else {
            return (
                <button className="button" onClick={() => this.props.addLetterHandler(this.props.letter)}>
                    {this.props.letter}
                </button>
            );
        }
    }
}

export default LetterButton;