const {useState} = require('react');

const {List} = require('../../../components/build/components_index');

const App = () => {
    const [columns, setColumns] = useState(window.reactListData.columns);
    const [sort, setSort] = useState(window.sortInitial);
    const [filter, setFilter] = useState(window.filterInitial);

    return <List
        columns={columns}
        sort={(sortSelection) => {
            fetch(`/api?sort=${sortSelection}&filter=${filter}`)
                .then(res => res.json())
                .then(data => {
                    setColumns(data.columns);
                })
                .catch(err => console.log(err));
            setSort(sortSelection);
        }}
        filter={(filterSelection) => {
            fetch(`/api?filter=${filterSelection}&sort=${sort}`)
                .then(res => res.json())
                .then(data => {
                    setColumns(data.columns);
                })
                .catch(err => console.log(err));
            setFilter(filterSelection);
        }}
    />
};

module.exports = App;
