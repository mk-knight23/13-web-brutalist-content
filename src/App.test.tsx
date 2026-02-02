import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => {
            const { initial, animate, whileInView, viewport, transition, ...rest } = props;
            return <div {...rest}>{children}</div>;
        },
        article: ({ children, ...props }: any) => {
            const { initial, whileInView, viewport, transition, ...rest } = props;
            return <article {...rest}>{children}</article>;
        },
    },
}));

describe('Industrial Content Blog', () => {
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders system status bar', () => {
        render(<App />);
        expect(screen.getByText(/System Status/i)).toBeInTheDocument();
        expect(screen.getByText(/All Nodes Operational/i)).toBeInTheDocument();
    });

    it('renders navigation with correct links', () => {
        render(<App />);
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getAllByText(/Articles/i)).toBeTruthy();
        expect(screen.getAllByText(/Protocols/i)).toBeTruthy();
        expect(screen.getAllByText(/Laboratory/i)).toBeTruthy();
        expect(screen.getAllByText(/Manifesto/i)).toBeTruthy();
    });

    it('renders hero section', () => {
        render(<App />);
        expect(screen.getAllByText(/Engineering/i)).toBeTruthy();
        expect(screen.getAllByText(/Modern/i)).toBeTruthy();
        expect(screen.getByText(/Web Experience/i)).toBeInTheDocument();
    });

    it('renders category grid', () => {
        render(<App />);
        expect(screen.getAllByText(/Frontend/i)).toBeTruthy();
        expect(screen.getByText(/Scalability/i)).toBeInTheDocument();
        expect(screen.getByText(/Aesthetics/i)).toBeInTheDocument();
        expect(screen.getByText(/Strategy/i)).toBeInTheDocument();
    });

    it('renders blog posts', () => {
        render(<App />);
        expect(screen.getAllByText(/Recent/i)).toBeTruthy();
        expect(screen.getAllByText(/Dispatches/i)).toBeTruthy();
        expect(screen.getByText(/The Death of Static Site Generators/i)).toBeInTheDocument();
        expect(screen.getByText(/Brutalist Web Design/i)).toBeInTheDocument();
        expect(screen.getByText(/Optimizing Core Web Vitals/i)).toBeInTheDocument();
    });

    it('has proper ARIA labels for accessibility', () => {
        render(<App />);

        // Check for application role
        expect(screen.getByRole('application', { name: /Industrial Content Blog/i })).toBeInTheDocument();

        // Check for main content
        expect(screen.getByRole('main')).toBeInTheDocument();

        // Check for footer
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders footer with sections', () => {
        render(<App />);
        expect(screen.getByText(/Core Protocols/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Support/i)).toBeTruthy();
        expect(screen.getAllByText(/Archive/i)).toBeTruthy();
        expect(screen.getAllByText(/Laboratory/i)).toBeTruthy();
    });
});
