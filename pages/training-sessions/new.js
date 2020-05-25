import Link from 'next/link'
import TrainingSessionForm from '../../components/trainingSessionForm'


export default function New() {
    return (
        <div className="container">
            <Link href="/dashboard">
                <a>Return to Dashboard</a>
            </Link>
            <TrainingSessionForm />

        </div>
    )
}
