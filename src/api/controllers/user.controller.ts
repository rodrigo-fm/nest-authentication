import { Controller, Get, Param, Query } from "@nestjs/common";
import { SearchUserRequest } from "../DTOs";

@Controller("user")
export default class UserController {

    @Get()
    getAll(): string {
        return "get all users route";
    }

    @Get("search")
    searchUser(@Query() query: SearchUserRequest): string {        
        return "search user by: " + JSON.stringify(query);
    }

    @Get("find/:id")
    getUser(@Param("id") id: number): string {
        return `get user ${id} route`;
    }

}