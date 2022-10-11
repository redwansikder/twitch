import React from 'react'
import { reduxForm, Field } from 'redux-form'

class StreamForm extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        <h6>{meta.touched ? meta.error : ''}</h6>
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' label='Enter title' component={this.renderInput} />
        <Field
          name='description'
          label='Enter Description'
          component={this.renderInput}
        />
        <button>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter description'
  }

  return errors
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm)
