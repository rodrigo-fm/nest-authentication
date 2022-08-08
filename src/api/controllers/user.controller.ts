import { Controller, Get, Param } from "@nestjs/common";

@Controller("user")
export default class UserController {

    @Get(":id")
    getUser(@Param("id") id: number): string {
        if(isNaN(id)) {
            return "not a number!";
        }
        return `get user ${id} route`;
    }
}   