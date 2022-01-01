import React, {FC} from "react"

export function withSuspense<WP>(Component: FC<WP>) {

    type propsType = {}

    const WrappedComponent: FC<propsType> = (props) => {
        return (
            <React.Suspense fallback={<div>loading</div>}>
                <Component {...props as WP} />
            </React.Suspense>
        )
    }

    return WrappedComponent
}