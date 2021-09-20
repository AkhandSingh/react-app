import React from 'react'
import './Dropdown.scss';

class Dropdown extends React.Component {


  constructor(props) {
    super(props);
    this.state = { className: 'dropdown-optionhead-hidden', selectedValue: '' }
    this.UlRef = React.createRef();
  }


  render() {

    const options = this.props.options.map(option => {

      const li = !this.props.multi ? <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}>{option.text}</li> : <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}><input id={option.text} className='dropdown-checkbox' type="checkbox" value={option.value} /><label for={option.text}>{option.text}</label></li>;
      return li; //<option key={option.value} value={option.value}>{option.text}</option>
    });

    return (
      //    <select multiple={this.props.multi? 'multiple':''} onChange={e=>this.props.onSelect(e.target.value)}>
      //        {options}
      //    </select>

      <div className="dropdown">
        <a href="#" className="dropdown-link" onClick={(e) => this.clickMe(e)}>{this.state.selectedValue ? this.state.selectedValue : '-- Select --'}<i className="arrow down icon fa"></i><i className="arrow up icon fa"></i><i className="angle down icon fa"></i></a>
        <ul className={this.state.className} ref={this.UlRef}>
          {options}
        </ul>
      </div>
    );
  }

  onOptionSelect(e) {
    debugger
    let value = '';
    if (this.props.multi) {
      var array = Array.prototype.slice.call( this.UlRef.current.childNodes);
      array.map(li => {
        if (li.childNodes[0].checked) {
          value += li.innerText +', ';
        }
      });

      value = value.slice(0, -2);
    } else {
      value = e.target.innerText;

    }

    this.setState({ selectedValue: value });
    this.props.onSelect(value);
  }

  clickMe(e) {
    e.preventDefault();
    if (e.target.className === 'arrow up icon fa') {
      this.props.options.sort(this.compareAsc);
    } else if (e.target.className === 'arrow down icon fa') {
      this.props.options.sort(this.compareDesc);
    }

    if (this.state.className == 'dropdown-optionhead-hidden') {
      this.setState({ className: 'dropdown-optionhead-open' })
    } else {
      this.setState({ className: 'dropdown-optionhead-hidden' })
    }
  }

  compareAsc(a, b) {
    if (a.text < b.text) {
      return -1;
    }
    if (a.text > b.text) {
      return 1;
    }
    return 0;
  }
  compareDesc(a, b) {
    if (a.text > b.text) {
      return -1;
    }
    if (a.text < b.text) {
      return 1;
    }
    return 0;
  }

}

export default Dropdown;