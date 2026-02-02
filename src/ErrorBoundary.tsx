import { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
        const errorDetails = {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            timestamp: new Date().toISOString()
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-white">
                    <div className="max-w-md w-full mx-6 p-8 bg-white border-4 border-slate-900 shadow-brutalist-orange text-center">
                        <div className="w-16 h-16 bg-orange-500 border-4 border-slate-900 flex items-center justify-center mx-auto mb-6 -rotate-6">
                            <span className="text-3xl font-black text-slate-900">!</span>
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">System Error</h1>
                        <p className="text-slate-500 mb-8 font-medium">A critical error has occurred in the industrial system. Please reload the application.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-slate-900 hover:bg-orange-600 text-white font-black uppercase tracking-widest transition-all shadow-brutalist-orange"
                        >
                            Reboot System
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
