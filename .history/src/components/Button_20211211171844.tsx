import { useState } from 'react'

type ButtonProps = {
    type: string;
}

export function Button(props: buttonProps) {
    return(
        <button className="button" {...props} />

    )
}