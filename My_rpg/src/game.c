/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		game.c
*/

#include "../include/rpg.h"
#include "../include/my.h"

Player_t *create_player(Player_t **player_arr);
Enemy_t *create_enemy(Enemy_t **enemy_arr);
void fight_enemy(Player_t **player, Enemy_t **enemy);
Enemy_t **init_enemies(void);
Player_t **init_player(void);
Boss_t **init_Boss(void);

int game(Player_t **player_arr, Enemy_t **enemy_arr, Boss_t **boss_arr)
{
    int floor;
    Player_t *player;
    Enemy_t *enemy;
    //    Boss_t *boss;

    floor = 1;
    player = create_player(player_arr);
    boss_arr[0]->hp = 0;
    while (floor <= 10 && player->hp > 0) {
        if (floor % 10 > 0) {
            enemy = create_enemy(enemy_arr);
            fight_enemy(&player, &enemy);
        }
            /*        } else if (floor % 10 == 0) {
            boss = create_boss();
            fight_boss();
            }*/
        if (player->hp <= 0) {
            my_putstr("YOU LOSE\n");
        }
        floor = floor + 1;
    }
    if (player->hp > 0)
        my_putstr("Congratulation, You have defeated all your enemies !\n");
    return (0);
}

int init_game()
{
    Player_t **player_arr;
    Enemy_t **enemy_arr;
    Boss_t **boss_arr;

    player_arr = init_player();
    enemy_arr = init_enemies();
    boss_arr = init_Boss();
    if (player_arr && enemy_arr && boss_arr) {
        game(player_arr, enemy_arr, boss_arr);
        return (0);
    } else {
        my_putstr("Could not create arrays");
        return (1);
    }
}
