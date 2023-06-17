import React from 'react'

export default class ErrorBoundary extends React.PureComponent<any, {
    hasError: boolean
    errorInfo: string
}> {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, errorInfo: error.message };
    }

    componentDidCatch(error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    color: 'red',
                    border: '1px solid #eee',
                    padding: 8,
                    marginBottom: 16,
                    borderRadius: 4,
                }}>
                    <h2 style={{ margin: 0 }}>Something went wrong.</h2>
                    <details style={{whiteSpace: "pre-wrap"}}>
                        {this.state.errorInfo}
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
}