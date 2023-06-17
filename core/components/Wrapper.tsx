import React, { Suspense } from 'react';
import { ErrorContainer } from '..';

export interface LoaderProps {
    predicate: (name: string) => boolean
    render: (name: string) => React.LazyExoticComponent<React.ComponentType<any>>
}

export default function Wrapper(props: {
    componentName: string
    fallback: React.ReactNode
    render: (name: string) => React.LazyExoticComponent<any>
}) {
    const { componentName, fallback, render: loader, ...restProps } = props

    const Comp = React.useMemo(() => props.render(componentName), [componentName, loader])

    return (
        <ErrorContainer>
            <Suspense fallback={fallback}>
                <Comp {...restProps} />
            </Suspense>
        </ErrorContainer>
    )
}