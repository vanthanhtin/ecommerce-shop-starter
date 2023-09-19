import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
   
const LoginCard = () => {
    return (
    <div className=" py-40 mx-auto">
      <Card className="w-96 mx-auto">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-secondary"
        >
          <Typography variant="h3" color="white">
            Đăng nhập
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Tên đăng nhập" size="lg" />
          <Input label="Mất khẩu" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Nhớ mật khẩu" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button  fullWidth className=" bg-nau hover:bg-secondary transition duration-300">
            Đăng nhập
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Không có tài khoản?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Đăng ký
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      </div>
    );
  }

export default LoginCard