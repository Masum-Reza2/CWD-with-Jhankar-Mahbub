// observe auth state change
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current user is ', currentUser)
        setUser(currentUser)
    });
    return () => {
        unSubscribe()
    }
}, [])