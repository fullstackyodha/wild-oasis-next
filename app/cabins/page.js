import { Suspense } from 'react'
import CabinCard from '../_components/CabinCard'
import CabinList from '../_components/CabinList'
import Spinner from '../_components/Spinner'

export const metadata = {
    title: 'Cabins',
}

const Cabins = () => {
    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>

            <p className="text-primary-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in
                the heart of the Italian Dolomites. Imagine
                waking up to beautiful mountain views,
                spending your days exploring the dark
                forests around, or just relaxing in your
                private hot tub under the stars. Enjoy
                nature&apos;s beauty in your own little home
                away from home. The perfect spot for a
                peaceful, calm vacation. Welcome to
                paradise.
            </p>

            {/* A fallback react tree to show when a Suspense child (like React.lazy) suspends */}
            <Suspense fallback={<Spinner />}>
                <CabinList />
            </Suspense>
        </div>
    )
}

export default Cabins
