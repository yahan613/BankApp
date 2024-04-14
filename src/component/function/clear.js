import React, { useState, useEffect } from 'react';

const useUnmount = func => {
    console.log('OJIHUYGYTFGYTG')
    useEffect(() => {
        return () => {
            func();
        };
    }, []);
};

export default useUnmount;