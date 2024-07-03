'use client'

import { IdTokenClaims, useLogto } from "@logto/react";
import { useEffect, useState } from "react";

const HomeHelper = () => {
    const { isAuthenticated, getIdTokenClaims } = useLogto();
    const [user, setUser] = useState<IdTokenClaims>();

    useEffect(() => {
        (async () => {
            console.log(isAuthenticated + "URRR")
            if (isAuthenticated) {
            const claims = await getIdTokenClaims();
            setUser(claims);
        }
        })();
    }, [getIdTokenClaims, isAuthenticated]);

    return (
        <div>
            <h1>urrr</h1>
            {isAuthenticated && user && (
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(user).map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{typeof value === 'string' ? value : JSON.stringify(value)}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    );
}

export default HomeHelper;