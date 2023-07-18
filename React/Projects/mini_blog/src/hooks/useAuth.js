import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export const useAuth = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);

        try{
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(user, { displayName: data.name})

            setLoading(false);
            return user;
        } catch (error){
            setLoading(false);
            if(error.message.includes("email-already-in-use")) setError("Email já está cadastrado!");
            else setError("Ocorreu um erro na requisição");
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }
}