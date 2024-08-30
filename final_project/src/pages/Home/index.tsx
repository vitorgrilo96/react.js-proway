import { studentClasses } from '../../utils/mock/classes'
import { Card } from '../../components/Card'

export default function Home() {
    return (
        <main className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                {studentClasses.map((subject, index) => (
                    <Card subject={subject} key={`${subject.code}-${index}`} />
                ))}
            </div>
        </main>
    )
}


