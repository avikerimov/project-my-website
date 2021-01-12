export function inPageSearch(event) {
  this.setState({
    searchValue: event.target.value,
  });
}

const search = {
  inPageSearch,
};

export {search};
