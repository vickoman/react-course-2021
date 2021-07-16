import React, { Component } from 'react';

class InjectHtml extends Component {
    render() {
        const htmlSource = `
        <div>
            <h1>Hello, world!</h1>
            <br/>
            <hr />
            <p>This is a simple HTML page.</p>
        </div>
        `;
        return (
            <div>
                <h1>Html injection</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: htmlSource
                    }}
                ></div>
            </div>
        );
    }
}
export default InjectHtml;