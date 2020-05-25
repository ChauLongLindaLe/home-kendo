import Link from 'next/link'

export default function Dashboard() {
    return (
        <>
            <h2>
                <Link href="/training-sessions/new">
                    <a>Insert training session</a>
                </Link>
            </h2>
        </>
    )
}