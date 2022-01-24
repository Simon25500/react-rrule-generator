import React, { Component } from 'react';

import ReactRRuleGenerator, { translations } from '../lib';

class App extends Component {
  state = {
    rrule: 'DTSTART:20190301T230000Z\nFREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
    isCopied: false,
    language: 'en',
  };

  getTranslation = () => ((this.state.language === 'de') ? translations.german : undefined);

  handleChangeLanguage = (event) => {
    event.persist();
    const newLanguage = event.target.value;
    this.setState({ language: newLanguage });
  };

  handleChange = (newRRule) => {
    this.setState({ rrule: newRRule, isCopied: false });
  };

  handleCopy = () => {
    this.setState({ isCopied: true });
  };

  render() {

    return (
        
      <ReactRRuleGenerator
        onChange={this.handleChange}
        value={this.state.rrule}
        local="fr-fr"
        config={{
              hideStart: false,
            }}
        translations={this.getTranslation()}
      />
   
    );
  }
}

export default App;
