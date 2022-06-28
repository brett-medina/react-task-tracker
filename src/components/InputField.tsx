import React from 'react'

interface Props {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ input, setInput , onSubmit}: Props) => {

  return ( 
		<form action="#" method="POST" onSubmit={onSubmit}>
			<div className="flex justify-center items-center">
				<div className="col-span-6 sm:col-span-4">
					<input
						type="text"
						name="email-address"
						id="email-address"
						autoComplete="email"
						placeholder="Enter a Task"
						value={input}
						onChange={(event) => setInput(event.target.value)}
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
					/>
				</div>
				<div className="px-4 py-3 text-right sm:px-6">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</button>
				</div>

			</div>
		</form>

  )
  
}

export default InputField