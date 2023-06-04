
export const Loading = () => {

    return (
        <section className="flex flex-col items-center justify-center h-screen w-screen gap-4">
            <div className="text-3xl font-light">Loading</div>
            <div className="border-[6px] border-solid border-[#f3f3f3] rounded-[50%] border-t-[6px] border-t-green-600 w-10 h-10 animate-spin"></div>
        </section>
    )
}