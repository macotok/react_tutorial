import React from 'react';
import PropsTypes from 'prop-types';

export class InputForm extends React.Component {
  handlesubmit(event) {
    event.preventDefault();
    const title = this.refs.title.value.trim();
    const text = this.refs.text.value.trim();

    // フォームのどちらかが空欄だったら処理しない
    if (!title || !text) return false;

    this.props.onTodoSubmit({
      title,
      text,
    });

    // 送信後フォームの内容を空に
    this.refs.title.value = '';
    this.refs.text.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handlesubmit.bind(this)}>
        <input type="text" placeholder="タスク名" ref="title" />
        <input type="text" placeholder="詳細" ref="text" />
        <button>追加</button>
      </form>
    );
  }
}

InputForm.propTypes = {
  title: PropsTypes.string,
  text: PropsTypes.string,
};

InputForm.defaultProps = {
  title: '',
  text: '',
};
