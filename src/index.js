import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { App } from './App';
import { AppGlobalsProvider } from './contexts/appGlobals';
import { appId } from '../package.json';

export class AppInstance {
    constructor(_boostrap = {}) {
        if (!_boostrap.rootElement) throw new Error('Укажите rootElement!');

        this._rootElement = _boostrap.rootElement;
        this._settings = _boostrap.settings;
        this._result = null;
        this._setResult = this._setResult.bind(this);
    }

    beforeMount() {
    }

    beforeUnmount() {
    }

    _setResult(result) {
        this._result = result;
    }

    mount() {
        this.beforeMount();
        render(
            <AppGlobalsProvider
                onResult={this._setResult}
                appSettings={this._settings}
            >
                <div className={appId}>
                    <App />
                </div>
            </AppGlobalsProvider>,
            this._rootElement
        );
    }

    unmount() {
        this.beforeUnmount(this._result);
        unmountComponentAtNode(this._rootElement);
    }
};