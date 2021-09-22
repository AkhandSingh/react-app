import React from 'react'
import './Dropdown.scss';

class Dropdown extends React.Component {


  constructor(props) {
    super(props);
    this.state = { className: 'dropdown-optionhead-hidden', selectedValue: "", isTextVisible: false, filteredOptions: this.props.options }
    this.UlRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", (event) => {
      if (event.target.className != 'dropdown' && event.target.className.indexOf('dropdown-') == -1) {
        if (this.state.className == 'dropdown-optionhead-open') {
          this.setState({ className: 'dropdown-optionhead-hidden' })
        }
      }
    });
  }

  renderMainDropdown() {
    // if (this.props.search && this.state.isTextVisible) {
    //   return (<div onClick={(e) => this.onSelect(e)}
    //     className="dropdown-link">
    //     <input
    //       className="dropdown-input"
    //       type="text"
    //       placeholder="-- Select --"
    //       onChange={(e) => this.onFilter(e)}
    //     />
    //     <i className="fa">
    //       <i className="angle down icon"></i>
    //       {this.props.sorting && <i className="arrow up icon"></i>}
    //       {this.props.sorting && <i className="arrow down icon"></i>}
    //     </i>
    //   </div>)
    // }
    if (this.props.search) {
      return (
        <a className="dropdown-div">
          <input
            className="dropdown-input"
            type="text"
            placeholder="---- Select ----"
            onMouseDown={(e) => this.onSelect(e)}
            onChange={(e) => this.onFilter(e)}
          />
          <i className="dropdown-icon-input">
            <i className="angle down icon"></i>
          </i>
        </a>)
    }
    return (<a href="#" className="dropdown-link" onClick={(e) => this.onSelect(e)}>{this.state.selectedValue ? this.state.selectedValue : "---- Select ----"}
      <i className="dropdown-icon">
        <i className="angle down icon"></i>
        {this.props.sorting && <i className="arrow up icon"></i>}
        {this.props.sorting && <i className="arrow down icon"></i>}
      </i>
    </a>)
  }

  render() {
    let options;
    if (!this.props.search) {
      options = this.props.options.map(option => {
        const li = !this.props.multi ? <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}>{option.text}</li> : <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}><input id={option.text} className='dropdown-checkbox' type="checkbox" value={option.value} /><label className='dropdown-label' for={option.text}>{option.text}</label></li>;
        return li;
      });
    }

    if (this.props.search) {
      options = this.state.filteredOptions.map(option => {
        const li = !this.props.multi ? <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}>{option.text}</li> : <li className="dropdown-option" key={option.value} onClick={(e) => this.onOptionSelect(e)}><input id={option.text} className='dropdown-checkbox' type="checkbox" value={option.value} /><label className='dropdown-label' for={option.text}>{option.text}</label></li>;
        return li;
      });
    }

    return (
      <div className="dropdown">
        {this.renderMainDropdown()}
        <ul className={this.state.className} ref={this.UlRef}>
          {options}
        </ul>
      </div>
    );
  }

  onOptionSelect(e) {
    let value = '';
    if (this.props.multi) {
      var array = Array.prototype.slice.call(this.UlRef.current.childNodes);
      array.map(li => {
        if (li.childNodes[0].checked) {
          value += li.innerText + ', ';
        }
      });

      value = value.slice(0, -2);
    } else {
      value = e.target.innerText;

    }

    this.setState({ selectedValue: value });
    this.props.onSelect(value);
  }

  onSelect(e) {
    //e.preventDefault();
    // if (this.props.search) {
    //   this.setState({ isTextVisible: true });
    // }

    if (e.target.className === 'arrow up icon') {
      this.props.options.sort(this.compareAsc);
    } else if (e.target.className === 'arrow down icon') {
      this.props.options.sort(this.compareDesc);
    }

    if (this.state.className == 'dropdown-optionhead-hidden') {
      this.setState({ className: 'dropdown-optionhead-open' })
    } else {
      this.setState({ className: 'dropdown-optionhead-hidden' })
    }
  }

  onFilter(e) {
    let optionList = e.target.value ? this.props.options.filter(option => option.text.toLowerCase().indexOf(e.target.value) > -1) : this.props.options;
    this.setState({ className: 'dropdown-optionhead-open', filteredOptions: optionList })
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