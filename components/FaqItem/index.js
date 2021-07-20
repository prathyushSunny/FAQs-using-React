import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    plusUrl: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
    minusUrl:
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
    toggleIcon:
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
  }

  toggleAnswer = () => {
    const {toggleIcon, plusUrl} = this.state
    if (toggleIcon === plusUrl)
      this.setState(prev => ({toggleIcon: prev.minusUrl}))
    else this.setState(prev => ({toggleIcon: prev.plusUrl}))
  }

  render() {
    const {faqItem} = this.props
    const {toggleIcon, minusUrl} = this.state
    const {questionText, answerText} = faqItem
    return (
      <div className="qna-container">
        <div className="qna">
          <p className="question">
            {questionText}{' '}
            <img
              onClick={this.toggleAnswer}
              className="toggle-icon"
              alt="plus"
              src={toggleIcon}
            />
          </p>
          {toggleIcon === minusUrl && (
            <div className="answer">{answerText}</div>
          )}
        </div>
      </div>
    )
  }
}

export default FaqItem
