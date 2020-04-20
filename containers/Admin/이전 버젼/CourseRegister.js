import React, { useEffect, useState } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';
import {isInt, isLength} from 'validator';
import Axios from 'axios';
import {AdminWrapper, AdminButton} from 'components/Admin';
import { Button } from '@material-ui/core';


function CourseRegister({ form, error, result, AuthActions, UserActions, history }) {
  const setError = (message) => {
    AuthActions.setError({ form: 'course', message });
  }

  const validate = {
    carName: value => {
      if(!isLength(value, { min: 2, max: 15 })) {
        setError('경로이름은 2자 이상, 최대 15자로 한다.');
        return false;
      }
      setError(null);
      return true;
    }
  };

  return (
    <AdminWrapper>
    <AuthContent title="경로 등록">
        <InputWithLabel 
        label="경로 이름" 
        name="courseName" 
        placeholder="ex)삼봉초등학교" 
        />
        <InputWithLabel 
          label="경로 위치" 
          name="Station" 
          placeholder="GPS로 위치를 등록합니다." 
        />
        {
          error && <AuthError>{error}</AuthError>
        }
        <AdminButton>등록하기</AdminButton>
        <RightAlignedLink to="/admin/courses">이전</RightAlignedLink>
    </AuthContent>
    </AdminWrapper>
  );
};

export default connect(
  (state) => ({
    form: state.auth.getIn(['course', 'form']),
    error: state.auth.getIn(['course', 'error']),
    result: state.auth.get('result')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(CourseRegister);