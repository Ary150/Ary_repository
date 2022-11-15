/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		init_ennemies.c
*/

#include "../include/Enemy.h"
#include "../include/my.h"

Enemy_t **init_enemies(void)
{
    Enemy_t **enemies;
    int i;

    i = 0;
    enemies = malloc(sizeof(enemies) * (11));
    if (!enemies)
        return (NULL);
    while (i < 10) {
        enemies[i] = malloc(sizeof(Enemy_t));
        if (!enemies[i])
            return (NULL);
        enemies[i]->name = my_strdup(Enemy_name[i]);
        enemies[i]->hp = Enemy_hp[i];
        enemies[i]->mp = Enemy_mp[i];
        enemies[i]->str = Enemy_str[i];
        enemies[i]->inte = Enemy_inte[i];
        enemies[i]->def = Enemy_def[i];
        enemies[i]->res = Enemy_res[i];
        enemies[i]->spd = Enemy_spd[i];
        enemies[i]->luck = Enemy_luck[i];
        i = i + 1;
    }
    enemies[i] = NULL;
    return (enemies);
}
