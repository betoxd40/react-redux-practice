import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(rootSaga);

export default store;