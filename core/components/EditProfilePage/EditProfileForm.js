import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { PROFILE_PAGE } from '../../constants/endpoints/ui'
import { InputField } from '../Form'
import { Button } from '../Button'

class EditProfileForm extends React.Component {
  submitHandler = async values => {
    const { username, fname, lname, career, address } = values
    const { mutate, activeUser } = this.props

    try {
      const result = await mutate({
        variables: {
          _id: activeUser._id,
          username,
          fname,
          lname,
          career,
          address
        }
      })

      const { success } = result.data.editProfile

      if (success) {
        Router.push(PROFILE_PAGE)
      } else {
        alert('failed')
      }
    } catch (err) {
      // Do something with this later
    }
  }

  render() {
    const { handleSubmit } = this.props
    console.table(this.props.activeUser)
    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        <Field
          type="text"
          name="username"
          label="ชื่อผู้ใช้งาน"
          component={InputField}
        />
        <Field
          type="text"
          name="fname"
          label="ชื่อจริง"
          component={InputField}
        />
        <Field
          type="text"
          name="lname"
          label="นามสกุล"
          component={InputField}
        />
        <Field name="career" label="อาชีพ" component={InputField} type="text" />
        <Field
          type="text"
          label="ที่อยู่"
          name="address"
          component={InputField}
        />
        <Button primary fluidWidth textCenter>
          เรียบร้อย
        </Button>
      </form>
    )
  }
}

EditProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired
}

const EDIT_PROFILE_MUTATION = gql`
  mutation editProfile(
    $_id: String!
    $lname: String
    $fname: String
    $career: String
    $address: String
    $username: String
  ) {
    editProfile(
      _id: $_id
      fname: $fname
      lname: $lname
      career: $career
      address: $address
      username: $username
    ) {
      success
      err {
        message
      }
    }
  }
`

const mapStateToProps = state => ({
  activeUser: state.user
})

export default compose(
  connect(mapStateToProps, null),
  reduxForm({ form: 'edit_profile' }),
  graphql(EDIT_PROFILE_MUTATION)
)(EditProfileForm)
