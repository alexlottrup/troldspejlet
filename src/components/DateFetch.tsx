import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { app } from '../configs/firebaseconfig'
import { useState } from 'react'

const DataFetch = () => {
	const db = getFirestore(app)
	const colRef = collection(db, 'test')
	const [books, setBooks] = useState<any[]>([])

	onSnapshot(colRef, (snapshot) => {
		let books: any = []
		snapshot.docs.forEach((doc) => {
			books.push({ ...doc.data(), id: doc.id })
		})
		setBooks(books)
	})

	return (
		<>
			{books.map((book) => (
				<div>{book.item1.john}</div>
			))}
		</>
	)
}

export default DataFetch
