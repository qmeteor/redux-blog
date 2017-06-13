/**
 * Created by Bien on 2017-06-12.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  //similar to connect component wires it to the reducer

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }


    render() {
        return (
            <form>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};


    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please'
    }
    return errors;
}

// 'PostsNewForm' just has to be unique string
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);