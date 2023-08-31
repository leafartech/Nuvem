type SubtitleType = {
    subtitle: string
}

export function Subtitle({ subtitle }: SubtitleType) {
    return (
        <div className="text-gray-600">
            <p>{subtitle}</p>
        </div>
    )
}