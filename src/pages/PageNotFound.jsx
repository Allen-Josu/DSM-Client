import { Button, Result } from 'antd';

function PageNotFound() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center pt-5' style={{ height: "100vh", zIndex: "1000" }}>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" href='/dashboard' >Back Home</Button>}
                />
            </div>

        </>
    )
}

export default PageNotFound